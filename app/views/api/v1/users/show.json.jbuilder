json.users @users.each do |user|
	json.name user.name
	json.age user.age
end