@users.each do |user|
	json.extract!(user, :name, :age)
end