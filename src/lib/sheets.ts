import Papa from "papaparse";
import { MenuItem, menuItemSchema } from "./validation";

// URL to published Google Sheets CSV (for example purposes)
// Format: category, name, description, price, image
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQQ9g5f5oKq-k7W-8aDq7Kk9N-7CqQzX8pB4L5uGv1oW9P-T1/pub?output=csv";

// Mock Data for fallback
const FALLBACK_MENU: MenuItem[] = [
  { category: "Кофе", name: "Капучино", description: "Мягкий кофейный напиток с бархатистой молочной пеной", price: 250, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80" },
  { category: "Кофе", name: "Флэт Уайт", description: "Насыщенный кофейный вкус с двойным эспрессо и тонкой пеной", price: 300, image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80" },
  { category: "Десерты", name: "Круассан классический", description: "Воздушный французский круассан на сливочном масле", price: 200, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80" },
  { category: "Десерты", name: "Тарталетка с ягодами", description: "Песочная корзинка с заварным кремом и свежими ягодами", price: 350, image: "https://images.unsplash.com/photo-1514056052883-d017fddd0426?w=800&q=80" },
  { category: "Завтраки", name: "Сырники", description: "Домашние сырники из фермерского творога со сметаной и джемом", price: 400, image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80" },
];

const CACHE_KEY = "bruni_menu_cache";
const CACHE_TIME = 10 * 60 * 1000; // 10 minutes

export async function fetchMenuData(): Promise<MenuItem[]> {
  try {
    const cachedStr = localStorage.getItem(CACHE_KEY);
    if (cachedStr) {
      const cached = JSON.parse(cachedStr);
      if (Date.now() - cached.timestamp < CACHE_TIME) {
        return cached.data;
      }
    }

    const res = await fetch(SHEET_URL);
    if (!res.ok) throw new Error("Network error fetching CSV");
    const csvData = await res.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          try {
            const data: MenuItem[] = [];
            for (const row of results.data as any[]) {
              const parsed = menuItemSchema.safeParse(row);
              if (parsed.success) {
                data.push(parsed.data);
              } else {
                console.warn("Invalid row skipped:", row, parsed.error);
              }
            }

            if (data.length > 0) {
              localStorage.setItem(
                CACHE_KEY,
                JSON.stringify({ timestamp: Date.now(), data })
              );
              resolve(data);
            } else {
              resolve(FALLBACK_MENU); // Use fallback if empty
            }
          } catch (e) {
            reject(e);
          }
        },
        error: (err: any) => {
          reject(err);
        }
      });
    });
  } catch (error) {
    console.error("Error fetching menu, using fallback.", error);
    return FALLBACK_MENU;
  }
}
