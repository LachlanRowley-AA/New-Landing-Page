# Asset Alley Landing Page Widget

## Version History

| Version | Date       | Comment             |
| ------- | ---------- | ------------------- |
| 03      | 01/04/2025 | Added industry type |
| 02      | 27/03/2025 | Improved clarity    |
| 01      | 24/03/2025 | Release Version     |

### Overview

This application integrates the Asset Alley landing page for financing website and app development. The code provides options to match the colors of the landing page with your own theme.

### Basic Implementation

This code creates the widget as an iframe where the script is placed:

```html
<script type="text/javascript" src="http://assetalley.vercel.app/embed.js"></script>
```

### Implementation with Styling

**To implement the landing page with custom styling, use the following code. Replace the colors below with appropriate hexadecimal values to match your website’s theme. See Page 5 -- Variable List for more information.**

```html
<!-- Style landing page -->
<script>
  window.assetAlleyConfig = {
    styles: {
      // CSS Styles
    },
    aaReferral: 'YOUR_CODE',
    aaCompact: 'true',
    aaBusinessType: 'website',
    aaDarkLogo: 'true',
    aaCustomLogo: 'false',
    aaBackgroundColor: '#242424',
    aaHeaderColor: '#01E194',
    aaSecondaryTextColor: '#828282',
    aaTertiaryTextColor: '#FFFFFF',
    aaButtonColor: '#801f1f',
    aaUnfilledBarColor: '#2E2E2E',
    aaCalculatorWeekly: 'true',
    aaCalculatorMonthly: 'true',
  };
</script>

<!-- Create iframe -->
<script type="text/javascript" src="http://assetalley.vercel.app/embed.js"></script>
```

**Note:** Each field is optional and will use the default value if unspecified.

**All variables are passed as strings.**

**IMPORTANT:** To be correctly associated with a client’s use of the website, `aaReferral` must be set using your referral code.

#### Example Referral Code

If your referral link is:

```
https://assetalley.vercel.app/?ref=12345
```

Then your referral code is **12345**.

If you cannot find your referral code, please contact:

- Louie Dib (<louie@assetalley.com.au>)
- Lachlan Rowley (<lachlan@assetalley.com.au>)

### Variable List

| **Variable Name**      | **Use**                                                                                                                   | **Default Value** |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `aaReferral`           | Used by Asset Alley to track customer source. **MUST BE SET TO BE ASSOCIATED WITH A REFERRAL**                            | `null`            |
| `aaCompact`            | Includes an optional page about the benefits of financing through a loan.                                                 | `'false'`         |
| `aaDarkLogo`           | Controls if Asset Alley's logo text color is optimized for dark backgrounds.                                              | `'true'`          |
| `aaCustomLogo`         | Controls if Asset Alley's logo appears at the top of the landing page. **Requires manual implementation if set to true**. | `'false'`         |
| `aaBackgroundColor`    | Sets the landing page’s background color.                                                                                 | `'#242424'`       |
| `aaHeaderColor`        | Sets the color of titles and primary UI components.                                                                       | `'#01E194'`       |
| `aaSecondaryTextColor` | Sets the color of non-title text appearing directly on the background.                                                    | `'#828282'`       |
| `aaTertiaryTextColor`  | Sets the color of text appearing on colored elements.                                                                     | `'#FFFFFF'`       |
| `aaButtonColor`        | Sets the submit button color.                                                                                             | `'#801F1F'`       |
| `aaUnfilledBarColor`   | Sets the color of unfilled portions of the repayment slider and text input background.                                    | `'#2E2E2E'`       |
| `aaCalculatorWeekly`   | Displays the calculated repayment in weekly amounts.                                                                      | `'true'`          |
| `aaCalculatorMonthly`  | Displays the calculated repayment in monthly amounts.                                                                     | `'false'`         |

### Optional Page

When `aaCompact` is set to `false`, an additional informational page is included before the requirements section.

![Optional Page](media/image3.png)

### FAQ

#### 1. The widget is too small

The height of the widget is controlled by CSS styling. Example solution:

```html
<script>
  window.assetAlleyConfig = {
    styles: {
      height: '100vh'
    },
    ...
  };
</script>
```

#### 2. How do I use my own logo?

To use your own logo, set `aaCustomLogo` to `'false'` and insert your logo code above the widget script.

Example:

```html
<div
  style="background-color:#242424; display: flex; justify-content: center; align-items: center; width: 100%;"
>
  <img
    src="https://www.assetalley.com.au/wp-content/uploads/2024/05/icon.png"
    style="height: 10vh"
  />
</div>

<script>
  window.assetAlleyConfig = {
    ...
    aaCustomLogo: 'true'
  };
</script>
```
