import request from "@/utils/request";
/**
 * @description: 用户列表
 * @param params
 * */
export function users(params: any){
	return request(
		{
			url:"/api/admin/users",
			method:"GET",
			params,
		}
	);
}
//添加用户
export  function addUser(data: object) {
	return request(
		{
			url: "/api/admin/users",
			method: "POST",
			data,
		}
	);
}

// 禁用和启用
export  function getUserLock(userid: string) {
	return request(
		{
			url: `/api/admin/users/${userid}/lock`,
			method: "PATCH"
		}
	);
}

export  function getUserInfo(userid: string) {
	return request(
		{
			url: `/api/admin/users/${userid}`,
			method: "GET",
		}
	);
}

export  function updateUser(userid: string, data: object) {
	return request(
		{
			url: `/api/admin/users/${userid}`,
			method: "PUT",
			data
		}
	);
}