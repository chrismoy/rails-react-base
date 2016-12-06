require "rails_helper"

RSpec.describe Api::V1::PlacesController do

  let(:base_url)  { public_url '/places' }

  describe 'GET #index' do

    let(:url) { base_url }

    before(:all)  { FactoryGirl.create_list(:place, 15) }
    before(:each) { get! url, headers: headers }

    it 'responds with success' do
      expect(response).to have_http_status(200)
    end

    it 'lists all places' do
      expect(json.length).to eq 10
    end
  end

  describe 'GET #show' do

    let(:place) { FactoryGirl.create :place }
    let(:url)   { "#{base_url}/#{place.id}" }

    before(:each) { get! url, headers }

    it 'responds with success' do
      expect(response).to have_http_status(200)
    end

    it 'responds with name and yelp_id' do
      expect(json[:name]).to eq place.name
      expect(json[:yelp_id]).to eq place.yelp_id
    end
  end
end
