import request from "@/utils/request";
/**
 * @description: 商品列表
 * @param params
 * */
// 商品列表
export function goods(params: any){
	return request(
		{
			url:"/api/admin/goods",
			method:"GET",
			params
		}
	);
}

// 添加商品
export  function addGood(data: object) {
	return request(
		{
			url: "/api/admin/goods",
			method: "POST",
			data,
		}
	);
}

// 商品详情
export  function getGoodInfo(goodid: string) {
	return request(
		{
			url: `/api/admin/goods/${goodid}`,
			method: "GET",
		}
	);
}


// 修改商品
export  function changeGood(goodid: string, data: object) {
	return request(
		{
			url: `/api/admin/goods/${goodid}`,
			method: "PUT",
			data
		}
	);
}


// 上架和下架
export  function getGoodLock(goodid: string) {
	return request(
		{
			url: `/api/admin/goods/${goodid}/on`,
			method: "PATCH",
		}
	);
}

// 推荐和不推荐
export  function recommendGood(goodid: string) {
	return request(
		{
			url: `/api/admin/goods/${goodid}/recommend`,
			method: "PATCH",
		}
	);
}