require 'rails_helper'

RSpec.describe Place, type: :model do
  
  subject(:place) { FactoryGirl.create :place }

  it { is_expected.to be_valid }

  it { is_expected.to respond_to :name }
  it { is_expected.to respond_to :yelp_id }

  it { is_expected.to validate_presence_of :name }
end
