module Requests

  module JsonHelpers

    def json
      @json ||= JSON.parse(response.body, symbolize_names: true)
    end
  end

  module RequestHelpers

    def get!(url, headers)

      get url,
        headers: headers
    end

    # def put!(url, data, headers)
    #   post url, data, headers
    # end

    # def patch!(url, data, headers)
    #   patch url, data, headers
    # end

    # def delete!(url, headers)
    #   delete url, 
    #     headers: headers
    # end

    # def auth_headers(user, api_version = 1)
    #   headers(api_version).merge({
    #     'X-User-Email'  => user.email,
    #     'X-User-Token'  => user.authentication_token
    #   })

    #   return headers
    # end

    # def bad_auth_headers(user, api_version = 1)
    #   headers = auth_headers(user, api_version)
    #   headers['X-User-Token'].upcase!

    #   return headers
    # end

    private

      def headers(options = {})

        default_options = {
          api_version:  1,
          content_type: :json
        }

        options = options.reverse_merge(default_options)

        case options[:content_type]
        when :json
          options[:content_type] = "application/json"
        when :html
          options[:content_type] = "text/html"
        end

        headers = {
          'Accept'        => "application/vnd.isomorphic-comments.v#{options[:api_version]}+json",
          'Content-type'  => options[:content_type]
        }

        return headers
      end
  end

  module ResponseHelpers

    # def responds_with_success(response)
    #   it 'responds with success' do
    #     expect(response).to have_http_status(200)
    #   end
    # end
  end

  module URIHelpers

    def public_url(path = nil)
      "http://api.food.dev#{path}"
    end
  end
end
