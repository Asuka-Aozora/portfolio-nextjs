// Konfigurasi Supabase Client
// File ini membuat koneksi ke database Supabase

import { createClient } from "@supabase/supabase-js";

// Ambil kredensial dari environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Validasi environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

// Buat instance Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions untuk data dari database
export interface Project {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  demo_url: string | null;
  github_url: string | null;
  tags: string[] | null;
  created_at: string;
}
