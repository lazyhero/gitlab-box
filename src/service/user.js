import http from "@/utils/http";
export async function login(username, password) {
  const res = await http.post("", {
    username,
    password,
  });
  return res;
}