# Text Colors

For text color within [Color Palette](./color_palette.md), you can follow these guidelines based on defined [Color Palette](colors.md):

### **1. Body Text (Main Content)**:
   - **Preferred Text Color**:
     - **`--dark-grey: #545454`**: This is a great choice for body text. It's a soft grey that provides good contrast without being too harsh like pure black. It's ideal for readability against light backgrounds.

### **2. Headings or Emphasized Text**:
   - **Text for Headings or Important Information**:
     - **`--dark: #000000`**: For headings or key pieces of information, pure black (`#000000`) gives a strong contrast, making it stand out.

### **3. Text on Light Backgrounds**:
   - **For Text on Light Backgrounds (e.g., `--light-background: #F8F8F8`)**:
     - **`--dark-grey: #545454`**: For text on light backgrounds, dark grey provides a good contrast without making the text too stark.
     - If you want a softer look, you could use **`--grey: #D9D9D9`** for secondary or less prominent text (e.g., metadata, descriptions).

### **4. Text on Dark Backgrounds**:
   - **For Text on Dark Backgrounds (e.g., `--dark-background: #333333`)**:
     - **`--light: #FFFFFF`**: White text (`#FFFFFF`) provides the best readability on dark backgrounds, ensuring clear visibility.

### **5. Interactive Text (Links, Buttons)**:
   - **For Links or Interactive Elements**:
     - **`--primary: #E03D54`**: The primary color can be used for links, buttons, or other interactive elements. It provides good visibility and matches the app’s main branding color.

### **6. Error or Alert Text**:
   - **For Error Messages or Alerts**:
     - **`--error: #EF233C`**: Red is commonly used for error messages, providing immediate visual feedback. This color would be ideal for error text.

### **7. Success and Info Text**:
   - **For Success or Informational Text**:
     - **`--success: #0ABB56`**: Green is associated with success and positive actions. It’s great for success messages.
     - **`--info: #04a1f0`**: Light blue works well for informational text or tooltips, as it's calming and stands out without being too aggressive.

### **Suggested Text Colors for Different Sections:**
```css
/* Body Text */
/* used for color with element (e.g., p, span, div). */
--text-body: var(--dark-grey);  /* #545454 */

/* Headings */
--text-heading: var(--dark);  /* #000000 */

/* Text on Light Backgrounds */
--text-light-background: var(--dark-grey);  /* #545454 */

/* Text on Dark Backgrounds */
--text-dark-background: var(--light);  /* #FFFFFF */

/* Links or Interactive Elements */
--text-link: var(--primary);  /* #E03D54 */

/* Error Text */
--text-error: var(--error);  /* #EF233C */

/* Success Text */
--text-success: var(--success);  /* #0ABB56 */

/* Info Text */
--text-info: var(--info);  /* #04a1f0 */
```

### **Summary**:
- For most body text, **`#545454`** (`--dark-grey`) will work well on light backgrounds.
- **Headings and key information** can use **`#000000`** for higher contrast.
- For text on **dark backgrounds**, **`#FFFFFF`** is best.
- Use **`#E03D54`** for **links, buttons, and important actions** to tie in your primary brand color.
- **Error text** can use **`#EF233C`**, while **success** and **info** can use their respective colors for clear, accessible communication.