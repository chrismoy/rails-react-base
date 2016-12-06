require "rails_helper"

RSpec.describe Api::V1::PlacesController do

  let(:base_url)  { public_url '/places' }

  describe 'ApplicationController using Places#index' do

    let(:url) { base_url }

    it 'responds with success with html request' do
      FactoryGirl.create_list(:place, 15)
      get! url, headers: headers(content_type: :html)
      expect(response).to have_http_status(200)
    end
  end
end
