import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tuowkzxyvigznctkihdm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1b3drenh5dmlnem5jdGtpaGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxOTgwODEsImV4cCI6MjA2NTc3NDA4MX0.7_coQ_1sP0vycNmLjt9bq8NB8YX0LZUFq-VJUZHFudc'

export const supabase = createClient(supabaseUrl, supabaseKey)
