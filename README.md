 
Asset Alley Landing Page Widget



Overview
This application will integrate the Asset Alley landing page for financing website and app development. The code provides options to match the colours of the landing page with your own theme.

Colour Guide
Below is an example of how the page’s colours are used
  


Basic Implementation
This code will create the widget as an iframe where the script is placed.
//Create iframe
<script type="text/javascript" src="http://assetalley.vercel.app/embed.js"></script>



Implementation with Styling
To implement the landing page with custom styling, use the following code. To use your website’s colours, replace the colours below with appropriate hexadecimal values. See Page 5 – Variable List for more information
<!--Style landing page  -->
<script>
        window.assetAlleyConfig = {
            styles: {
	//CSS Styles
            },
           aaReferral : 'YOUR_CODE', 
           aaCompact: 'true',
           aaBusinessType: ‘website’
           aaDarkLogo: 'true',
           aaCustomLogo: 'false',
           aaBackgroundColor: '#242424',
           aaHeaderColor: '#01E194',
           aaSecondaryTextColor: '#828282',
           aaTertiaryTextColor: '#FFFFFF',
           aaButtonColor: '#801f1f',
           aaUnfilledBarColor: '#2E2E2E',
           aaCalculatorWeekly: 'true',
           aaCalculatorMonthly: 'true'
        }
    </script>

<!--Create iframe -->
<script type="text/javascript" src="http://assetalley.vercel.app/embed.js"></script>

Note: each field is optional and will use the default value if unspecified
All variables are passed as strings
IMPORTANT: To be correctly associated with a client’s use of the website, aaReferral must be set using your referral code
If you have already been provided with a referral link, your referral code follows the ‘ref=’ in the referral link url.
EXAMPLE: 
If your referral link is
https://assetalley.vercel.app/?ref=12345

Then your referral code is 12345

If you cannot find your referral code, please contact either:
Louie Dib louie@assetalley.com.au or
Lachlan Rowley lachlan@assetalley.com.au 




Variable List
Variable Name	Use	Default Value
aaReferral	Used by Asset Alley to track customer source

MUST BE SET TO BE ASSOCIATED WITH A REFERRAL	null
aaBusinessType	Used to set your business type and set appropriate on screen text.

Valid values are:
‘website’ for digital agencies
‘shopfit’ for shopfitters
‘materials’ for material wholesalers	null
aaCompact	Used to hide an optional page about the benefits of financing through a loan (see below)	‘true’
aaDarkLogo	Used to control if Asset Alley’s logo text colour. Set as true if the logo will appear over a dark background	‘true’
aaCustomLogo	Used to control if Asset Alley’s logo will appear at the top of the landing page.
Set to true if you want to use your company’s logo*

*Requires manual implementation	‘false’
aaBackgroundColor	Sets the landing page’s background colour	‘#242424’
aaHeaderColor	Sets the colour of titles and primary components’ fill	‘#01E194’
aaSecondaryTextColor	Sets the colour of non-title text that will appear directly on the background	‘#828282’
aaTertiaryTextColor	Sets the colour of text that will appear on coloured elements	‘#FFFFFF’
aaButtonColor	Sets the submit button colour	‘#801F1F’
aaUnfilledButtonColor	Sets the color of unfilled portion of the repayment slider and text input background	‘#2E2E2E’
aaCalculatorWeekly	Displays the calculated repayment in weekly amounts	‘true’
aaCalculatorMonthly	Displays the calculated repayment in monthly amounts.

Both repayment values can be show at the same time	‘false’




FAQ
1.	The widget is too small
The height of the widget is controlled by css styling.
Example solution 
<script>
    window.assetAlleyConfig = {
	styles: {
		height: ‘100vh’
	},
	…


2.	How do I use my own logo?
To use your own logo, set aaCustomLogo to ‘false’
You will need to insert your usual logo code above the widget <script>.

Example:
<div style="background-color:#242424; display: flex; 
                         justify-content: center;
                        align-items: center; width: 100%;">
        <img src="https://www.assetalley.com.au/wp-content/uploads/2024/05/icon.png" style="height: 10vh"/>
</div>  
<script>
    window.assetAlleyConfig = {
	… 
	aaCustomLogo: ‘true’
}
</script>
