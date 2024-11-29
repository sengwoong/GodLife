const fontWeights: { [key in 'regular' | 'medium' | 'bold']: number } = {
    regular: 400,
    medium: 500,
    bold: 700,
  };
  
  const displayFontSizes = {
    displayLarge: '56px',
    displayMedium: '48px',
    displayMediumSmall: '40px',
    displaySmall: '36px',
  } as const;
  
  const titleFontSizes = {
    titleLarge: '24px',
    titleMedium: '20px',
    titleMediumSmall: '18px',
    titleSmall: '16px',
  } as const;
  
  const bodyFontSizes = {
    bodyLarge: '13px',
    bodyMedium: '12px',
    bodySmall: '11px',
  } as const;
  
  const titleBodyFontSizes = {
    titleBodyLarge: '16px',
    titleBodyMedium: '15px',
    titleBodyMediumSmall: '14px',
    titleBodySmall: '13px',
  } as const;
  
  const letterSpacing = {
    english: {
      display: '0.05em',
      title: '0.04em',
      body: '0.03em',
      titleBody: '0.02em',
    },
  } as const;
  
  function getFontStyle(
    category: 'display' | 'title' | 'body' | 'titleBody',
    size: 'large' | 'medium' | 'mediumSmall' | 'small',
    weight: 'regular' | 'medium' | 'bold'
  ) {
  
    let fontSize: string;
    switch (category) {
      case 'display':
        fontSize = displayFontSizes[`display${capitalizeFirstLetter(size)}` as keyof typeof displayFontSizes];
        break;
      case 'title':
        fontSize = titleFontSizes[`title${capitalizeFirstLetter(size)}` as keyof typeof titleFontSizes];
        break;
      case 'body':
        fontSize = bodyFontSizes[`body${capitalizeFirstLetter(size)}` as keyof typeof bodyFontSizes];
        break;
      case 'titleBody':
        fontSize = titleBodyFontSizes[`titleBody${capitalizeFirstLetter(size)}` as keyof typeof titleBodyFontSizes];
        break;
    }
  
    const fontWeight = fontWeights[weight];
  
    let letterSpacingValue: string;
    switch (category) {
      case 'display':
        letterSpacingValue = letterSpacing.english.display;
        break;
      case 'title':
        letterSpacingValue = letterSpacing.english.title;
        break;
      case 'body':
        letterSpacingValue = letterSpacing.english.body;
        break;
      case 'titleBody':
        letterSpacingValue = letterSpacing.english.titleBody;
        break;
    }
  
    return {
      fontSize,
      fontWeight,
      letterSpacing: letterSpacingValue,
    };
  }
  
  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export { getFontStyle };
  