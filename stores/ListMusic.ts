import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', () => {
  const runtimeConfig = useRuntimeConfig()
  const listCategory = ref();
  const listMan = ref();
  const listJewelery = ref();
  const listElectronics = ref();
  const listWomen = ref();
  const listCategoryProduct = ref();
  const detailProduct = ref('');

  const setCategory = (data?: any) => (listCategory.value = data)
  const setMan = (data?: any) => (listMan.value = data)
  const setJewelery = (data?: any) => (listJewelery.value = data)
  const setElectronics = (data?: any) => (listElectronics.value = data)
  const setWomen = (data?: any) => (listWomen.value = data)
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

  const getMan = async () => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/category/men's clothing?limit=4`)
      setMan(res)
    } catch (error) {
      setMan();
      console.log('Error', error)
    }
  };

  const getJewelery = async () => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/category/jewelery?limit=4`)
      setJewelery(res)
    } catch (error) {
      setJewelery();
      console.log('Error', error)
    }
  };

  const getElectronics = async () => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/category/electronics?limit=4`)
      setElectronics(res)
    } catch (error) {
      setElectronics();
      console.log('Error', error)
    }
  };

  const getWomen = async () => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/category/women's clothing?limit=4`)
      setWomen(res)
    } catch (error) {
      setWomen();
      console.log('Error', error)
    }
  };

  const getCategoryProduct = async (slug: any) => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/category/${slug}`)
      setCategoryProduct(res)
    } catch (error) {
      setCategoryProduct();
      console.log('Error', error)
    }
  };

  const getDetailProduct = async (slug: any) => {
    try {
      const res = await $fetch(`${runtimeConfig.public.API_ENDPOINT}/products/${slug}`)
      console.log('Check store', res)
      setDetailProduct(res)
    } catch (error) {
      setDetailProduct();
      console.log('Error', error)
    }
  };

  return {
    listCategory,
    listElectronics,
    listMan,
    listJewelery,
    listWomen,
    listCategoryProduct,
    detailProduct,
    getCategory,
    setCategory,
    getElectronics,
    setElectronics,
    getMan,
    setMan,
    getJewelery,
    setJewelery,
    getWomen,
    setWomen,
    getCategoryProduct,
    setCategoryProduct,
    getDetailProduct,
    setDetailProduct
  }
})
