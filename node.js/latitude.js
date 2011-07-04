
var sys = require('sys');
var OAuth = require('../../node-oauth/lib/oauth').OAuth;

oa = new OAuth("https://www.google.com/accounts/OAuthGetRequestToken",
             "https://www.google.com/latitude/apps/OAuthAuthorizeToken", 
             "anonymous",  "anonymous", 
             "1.0A", "http://localhost:3000/oauth/callback", "HMAC-SHA1");
             
oa.getOAuthRequestToken({"scope":"https://www.googleapis.com/auth/latitude"},function(error, oauth_token, oauth_token_secret, results){
 if(error) sys.puts('error :' + JSON.stringify(error))
 else { 
   sys.puts('oauth_token: ' + oauth_token)
   sys.puts('oauth_token_secret: ' + oauth_token_secret)
   sys.puts('requestoken results: ' + sys.inspect(results))
   sys.puts("Requesting access token")
   
   
   
   
   //domain=example.com&location=current&granularity=best&oauth_token=YOUR_TOKEN
 }
})