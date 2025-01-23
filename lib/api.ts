import { supabase } from "./supabase"

// User functions
export const createUser = async (userData: any) => {
  const { data, error } = await supabase.from("users").insert([userData]).select()
  return { data, error }
}

export const getUser = async (userId: string) => {
  const { data, error } = await supabase.from("users").select("*").eq("id", userId).single()
  return { data, error }
}

export const updateUser = async (userId: string, updates: Partial<User>) => {
  const { data, error } = await supabase.from("users").update(updates).eq("id", userId).select()
  return { data, error }
}

// Transaction functions
export const createTransaction = async (transactionData: any) => {
  const { data, error } = await supabase.from("transactions").insert([transactionData]).select()
  if (data) {
    await createNotification(
      transactionData.user_id,
      `New ${transactionData.type} transaction of ETB ${Math.abs(transactionData.amount)} has been initiated.`,
    )
  }
  return { data, error }
}

export const getUserTransactions = async (userId: string) => {
  const { data, error } = await supabase.from("transactions").select("*").eq("user_id", userId)
  return { data, error }
}

// Bank functions
export const getUserBanks = async (userId: string) => {
  const { data, error } = await supabase.from("user_banks").select("*, banks(*)").eq("user_id", userId)
  return { data, error }
}

export const addUserBank = async (userId: string, bankId: string, accountNumber: string) => {
  const { data, error } = await supabase
    .from("user_banks")
    .insert([{ user_id: userId, bank_id: bankId, account_number: accountNumber }])
    .select()
  return { data, error }
}

// Notification functions
export const createNotification = async (userId: string, message: string) => {
  const { data, error } = await supabase
    .from("notifications")
    .insert([{ user_id: userId, message }])
    .select()
  return { data, error }
}

