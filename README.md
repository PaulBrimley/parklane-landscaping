
## Deploy

- `yarn build`
- `cd build`
- `zip -r parklane-landscaping.zip . -x ".DS_Store" ".git/*" ".idea/*"`
- log into GoDaddy
- go to cPanel file manager
- upload zip file to `public_html` folder (or to subdomain folder if updating subdomain)
- click on the zip file and then click `Extract`