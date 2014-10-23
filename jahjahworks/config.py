from livesettings import config_register, ConfigurationGroup, StringValue, BooleanValue
from django.utils.translation import ugettext_lazy as _

# First, setup a group to hold all our possible configs
STRIPE_KEYS = ConfigurationGroup(
    # key: internal name of the group to be created
    'jahjahworks',
    # name: verbose name which can be automatically translated
    _('jahjah.works Settings'),
    # ordering: order of group in the list (default is 1)
    ordering=0
)

config_register(BooleanValue(
    STRIPE_KEYS,
    'STRIPE_TEST_MODE',
    description=_("Stripe Test Mode"),
    help_text=_("Stripe Test Mode."),
    default=True
))

config_register(StringValue(
    STRIPE_KEYS,
    'STRIPE_TEST_PUBLIC_KEY',
    description=_("TEST / Stripe Public Key"),
    help_text=_("Default Stripe Public Key to use."),
    default="pk_test_G5YzkYwrHN6zzuXRStGX3kTY"
))

config_register(StringValue(
    STRIPE_KEYS,
    'STRIPE_TEST_SECRET_KEY',
    description=_("TEST / Stripe Secret Key"),
    help_text=_("Default Stripe Secret Key to use."),
    default="sk_test_1t8m6eP0cqKx3vwlPXJhzBg2"
))

config_register(StringValue(
    STRIPE_KEYS,
    'STRIPE_LIVE_PUBLIC_KEY',
    description=_("LIVE / Stripe Public Key"),
    help_text=_("Default Stripe Public Key to use."),
    default="pk_live_HSURt1BERZTaPKRbeD54e3qq"
))

config_register(StringValue(
    STRIPE_KEYS,
    'STRIPE_LIVE_SECRET_KEY',
    description=_("LIVE / Stripe Secret Key"),
    help_text=_("Default Stripe Secret Key to use."),
    default="sk_live_DaG9I7KukshbR4r9MpOVIDLo"
))


