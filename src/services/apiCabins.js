import supabase from './supabase'

export async function getCabinss() {
  const { data, error } = await supabase.from('cabins').select('*')

  if (error) {
    console.error(error)
    throw new Error('Cabons could not be loaded')
  }

  return data
}
