import {useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchData,filterProducts} from '../../redux/slice'
import { addItem } from '../../redux/cartSlice'

function ProductCard() {
    const [filter, setFilter] = useState('');
     const dispatch=useDispatch()

     const {products} = useSelector((state)=>state.products)
     //console.log(Array.isArray(products))
     useEffect(()=>{
        dispatch(fetchData())
     },[])
    const addToCart = (products) => {
        dispatch(addItem({...products,quantity:1}))
    }
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        dispatch(filterProducts(e.target.value));
      };
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Latest Collection</h1>
                    <div class="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                {/* search bar */}
                <div className=' container mx-auto px-4 mt-5 '>
                <div className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200">
                   
                    <div className="relative">
                        <div className="absolute flex items-center ml-2 h-full">
                            <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="searchkey"
                            value={filter}
                            placeholder="Search here"
                            className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"  onChange={handleFilterChange}/>
                    </div>
                   
                </div>
            </div>

                <div className="flex flex-wrap -m-4 mt-8">
                    {products.map((item,index)=>{
                        return(
                            <div key={index.id} className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"  >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={item.image} alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">E-Commerce</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" >{item.title.slice(0,30)}</h1>
                                
                                <p className="leading-relaxed mb-3" >₹{item.price} </p>
                                <div className=" flex justify-center">
                                    <button  type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2" onClick={()=>addToCart(item)}>Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>

                        )
                    }
                    )}           
                </div>
            </div>
        </section >
    )
}

export default ProductCard