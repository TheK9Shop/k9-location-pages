import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jsgigjqqlgjedfevglzo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzZ2lnanFxbGdqZWRmZXZnbHpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NzMxMTIsImV4cCI6MjEwNzA0OTExMn0.S-VDQuyDPVZacLd-ZeLYTz3fAhbkQTY3bC1rR79BA_o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)