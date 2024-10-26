import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const runtimeConfig = useRuntimeConfig()
  const listCategory = ref();
  const listProductBeauty = ref();
  const listProductFragrances = ref();
  const listProductFurniture = ref();
  const listProductGroceries = ref();
  const listCategoryProduct = ref();
  const detailProduct = ref('');

  const setCategory = (data?: any) => (listCategory.value = data)
  const setProductBeauty = (data?: any) => (listProductBeauty.value = data)
  const setFragrances = (data?: any) => (listProductFragrances.value = data)
  const setFurniture = (data?: any) => (listProductFurniture.value = data)
  const setGroceries = (data?: any) => (listProductGroceries.value = data)
  const setCategoryProduct = (data?: any) => (listCategoryProduct.value = data)
  const setDetailProduct = (data?: any) => (detailProduct.value = data)
  

  const getCategory = async () => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/categories`)
      setCategory(res)
    } catch (error) {
      setCategory();
      console.log('Error', error)
    }
  };

  const getProductBeauty = async (limit: string) => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/category/beauty?limit=${limit}`)
      setProductBeauty(res.products)
    } catch (error) {
      setProductBeauty();
      console.log('Error', error)
    }
  };

  const getFragrances = async (limit: string) => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/category/fragrances?limit=${limit}`)
      setFragrances(res.products)
    } catch (error) {
      setFragrances();
      console.log('Error', error)
    }
  };

  const getFurniture = async (limit: string) => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/category/furniture?limit=${limit}`)
      setFurniture(res.products)
    } catch (error) {
      setFurniture();
      console.log('Error', error)
    }
  };

  const getGroceries = async (limit: string) => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/category/groceries?limit=${limit}`)
      setGroceries(res.products)
    } catch (error) {
      setGroceries();
      console.log('Error', error)
    }
  };

  const getCategoryProduct = async (slug: any) => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/category/${slug}`)
      setCategoryProduct(res.products)
    } catch (error) {
      setCategoryProduct();
      console.log('Error', error)
    }
  };

  const getDetailProduct = async (slug: any) => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/${slug}`)
      setDetailProduct(res)
    } catch (error) {
      setDetailProduct();
      console.log('Error', error)
    }
  };

  return {
    listCategory,
    listProductBeauty,
    listProductFragrances,
    listProductFurniture,
    listProductGroceries,
    listCategoryProduct,
    detailProduct,
    getProductBeauty,
    setProductBeauty,
    getFragrances,
    setFragrances,
    getFurniture,
    setFurniture,
    getGroceries,
    setGroceries,
    getCategory,
    setCategory,
    getCategoryProduct,
    setCategoryProduct,
    getDetailProduct,
    setDetailProduct
  }
})
