// Accentuate($('#ls-header-account-register'), handleAccentuateResponse, validateCustomerSignupForm);
Accentuate($('#ls-customer-profile-body'), handleAccentuateResponse);
Accentuate($('#ls-customer-profile-sidebar'), handleAccentuateResponse);

function handleAccentuateResponse(data) {
  if (data.status === 'ERROR') {
    // @todo: Send errors to Sentry, Datadog, or other.
    console.log(data.message);
    console.error(data.errors);
    return;
  }
  if (data.status === 'OK') {
    window.location.reload();
  }
}
