require 'yelp'

Yelp.client.configure do |config|
  config.consumer_key = Figaro.env.YELP_CONSUMER_KEY
  config.consumer_secret = Figaro.env.YELP_SECRET_KEY
  config.token = Figaro.env.YELP_TOKEN
  config.token_secret = Figaro.env.YELP_TOKEN_SECRET
end
