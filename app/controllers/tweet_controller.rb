class TweetController < ApplicationController

  def tweet
    client = Twitter::REST::Client.new do |config|
      # applicationの設定
      # config.consumer_key         = Settings.twitter_key
      # config.consumer_secret      = Settings.twitter_secret
      config.consumer_key         = Rails.application.secrets.twitter_key
      config.consumer_secret      = Rails.application.secrets.twitter_secret

      # ユーザー情報の設定
      config.access_token         = session[:oauth_token]
      config.access_token_secret  = session[:oauth_token_secret]
    end

    # Twitter投稿
    client.update(params[:text])
    redirect_to root_path, notice: 'ツイートしました！'
  end
end