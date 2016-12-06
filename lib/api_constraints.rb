class ApiConstraints

  def initialize(options = {})
    @default = options[:default]
    @version = options[:version]
  end

  def matches?(request)
    @default || request.headers['Accept'].include?("application/vnd.foodrly.v#{@version}+json")
  end
end
