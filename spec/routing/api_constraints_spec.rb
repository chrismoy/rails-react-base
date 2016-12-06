require 'rails_helper'
require 'api_constraints'

describe ApiConstraints do

  let(:api_constraints_v1) { ApiConstraints.new version: 1 }
  let(:api_constraints_v2) { ApiConstraints.new version: 2, default: true }

  describe 'matches?' do
    
  end
end
