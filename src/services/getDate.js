import fetch from '../config/fetch.js'

//基础数据库

//数据总量
export const sjzjData = ()=>fetch('/sjzl',{
    type: 'sjzl'
})

//全部数据量
export const qbsjlData = ()=>fetch('/qbsjl',{
    
})


//数据集

export const sjjData = ()=>fetch('/sjj',{

})

//入库数据量
export const rksjlData = ()=>fetch('/rksjl',{

})

//人口数
export const rkData = () => fetch('/rk', {

})
