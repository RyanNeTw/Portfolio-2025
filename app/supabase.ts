import { createClient } from "@supabase/supabase-js";

if (
  !process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY ||
  !process.env.NEXT_PUBLIC_SUPABASE_URL
) {
  throw new Error(
    "Configure supabase variables SUPABASE_ROLE_KEY or SUPABASE_URL in `.env` and use `npm run dev` to start dev",
  );
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY as string,
);

export default supabase;
