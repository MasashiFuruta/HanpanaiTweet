class SessionsController < ApplicationController
  def create
    user = User.find_or_create_from_auth(request.env['omniauth.auth'])

    # sessionに保持するように変更
    session[:user_id] = user.uid
    session[:name] = user.name
    # 投稿に必要なauth_token, secret_tokenも取得する
    auth = request.env['omniauth.auth']
    session[:oauth_token] = auth['credentials']['token']
    session[:oauth_token_secret] = auth['credentials']['secret']

    redirect_to root_path
  end

  def destroy
    reset_session
    redirect_to root_path
  end
end