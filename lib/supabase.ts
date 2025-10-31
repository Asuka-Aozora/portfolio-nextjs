// Konfigurasi Supabase Client dengan Storage helper
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || "project-images";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function untuk mendapatkan public URL dari image path
export function getImageUrl(imagePath: string | null): string {
  if (!imagePath) {
    // Placeholder image jika tidak ada gambar
    return "/placeholder-project.png";
  }

  const { data } = supabase.storage.from(bucketName).getPublicUrl(imagePath);

  return data.publicUrl;
}

// Type definitions
export interface Project {
  id: string;
  title: string;
  description: string | null;
  image_path: string | null; // Ganti dari image_url
  demo_url: string | null; // Tetap ada tapi tidak digunakan
  github_url: string | null;
  tags: string[] | null;
  created_at: string;
}
