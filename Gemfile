source 'https://rubygems.org'

gem 'rails',                    '~> 5.0.0', '>= 5.0.0.1'
gem 'pg',                       '~> 0.18'
gem 'puma',                     '~> 3.0'
gem 'active_model_serializers', '~> 0.10.0'
gem 'responders',               '~> 2.3.0'

# Core included gems
gem 'figaro',   '~> 1.1.1'
gem 'foreman',  '~> 0.82.0'

# External included gems
gem 'yelp',       '~> 2.1.3', require: 'yelp'
gem 'instagram',  '~> 1.1.6'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
# gem 'rack-cors'

group :development, :test do
  gem 'byebug', platform: :mri
  
  %w[rspec-core rspec-expectations rspec-mocks rspec-rails rspec-support].each do |lib|
    gem lib, :git => "https://github.com/rspec/#{lib}.git", :branch => 'master'
  end

  gem 'factory_girl_rails', '~> 4.7.0'
  gem 'faker',              '~> 1.6.6'
  gem 'shoulda-matchers',   '~> 3.1'
  gem 'database_cleaner',   '~> 1.5.3'
  gem 'simplecov',          '~> 0.12.0', :require => false
end

group :development do
  gem 'listen'
  gem 'spring', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
