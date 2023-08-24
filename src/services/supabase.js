import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dkmeepmvsjugthzdccrt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrbWVlcG12c2p1Z3RoemRjY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3MDYzMzIsImV4cCI6MjAwODI4MjMzMn0.BHiNda-pvPGuIwKsAe_S7BnMwXKImjXVXYNyVjImlQ8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
