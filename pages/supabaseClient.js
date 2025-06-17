import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qjslliftrxtxqfxjdtgc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI...' // your real key

export const supabase = createClient(supabaseUrl, supabaseKey)
