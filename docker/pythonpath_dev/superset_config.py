# Superset specific config
ROW_LIMIT = 5000

# Flask App Builder configuration
# Your App secret key will be used for securely signing the session cookie
# and encrypting sensitive information on the database
# Make sure you are changing this key for your deployment with a strong key.
# Alternatively you can set it with `SUPERSET_SECRET_KEY` environment variable.
# You MUST set this for production environments or the server will not refuse
# to start and you will see an error in the logs accordingly.
# SECRET_KEY = '9HugbmFrCPGm+Rh6sNHopn4b00dTcrQjb3WciqCIQt8cgMOPtkHODi8l'
SECRET_KEY = 'QpH3S9WZLS+WbguIl0xiGFJNGqJ5qFIEti+NOv33IKjqLwL9mCh/ttYm'
# The SQLAlchemy connection string to your database backend
# This connection defines the path to the database that stores your
# superset metadata (slices, connections, tables, dashboards, ...).
# Note that the connection information to connect to the datasources
# you want to explore are managed directly in the web UI
# The check_same_thread=false property ensures the sqlite client does not attempt
# to enforce single-threaded access, which may be problematic in some edge cases
# SQLALCHEMY_DATABASE_URI = 'mysql://keshav.arora:W!nterT1me@fe-mean.cp4lje53dvkz.ap-south-1.rds.amazonaws.com/BI'
SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:bJn0TyYc4Jn54Bhu7dkt@od-reports.c9omk2ykqhw3.ap-southeast-2.rds.amazonaws.com:5432/superset_db'
# SQLALCHEMY_DATABASE_URI = 'mysql://username:password@localhost/superset_db'

TALISMAN_ENABLED = False
WTF_CSRF_ENABLED = False

# Set this API key to enable Mapbox visualizations
MAPBOX_API_KEY = ''

SESSION_COOKIE_SAMESITE = None
ENABLE_PROXY_FIX = True
PUBLIC_ROLE_LIKE_GAMMA = True
FEATURE_FLAGS = {
    'DASHBOARD_CROSS_FILTERS': True,
    'HORIZONTAL_FILTER_BAR': True,
    'ENABLE_TEMPLATE_PROCESSING': True,
    'EMBEDDED_SUPERSET': True,
}

HTTP_HEADERS = {'X-Frame-Options': 'ALLOWALL'}
ENABLE_CORS = True

CORS_OPTIONS = {
  'supports_credentials': True,
  'allow_headers': ['*'],
  'resources':['*'],
  'origins': ['*']
}


#GUEST_ROLE_NAME = "Gamma"
#GUEST_TOKEN_JWT_SECRET = "9HugbmFrCPGm+Rh6sNHopn4b00dTcrQjb3WciqCIQt8cgMOPtkHODi8l"
#GUEST_TOKEN_JWT_ALGO = "HS256"
#GUEST_TOKEN_HEADER_NAME = "X-GuestToken"
#GUEST_TOKEN_JWT_EXP_SECONDS = 300  # 5 minutes

#EXTRA_CATEGORICAL_COLOR_SCHEMES['od_color_scheme'] = ['#AECCC5', '#373938', '#DCD3C2', '#4A9A6B', '#F4806A']


EXTRA_CATEGORICAL_COLOR_SCHEMES = [
    {
        "id": 'odColors',
        "description": '',
        "label": 'OD Colors',
        "isDefault": False,
        "colors":
         ['#AECCC5', '#373938', '#DCD3C2', '#4A9A6B', '#F4806A']
    }]


# THEME_OVERRIDES = {
#   "borderRadius": 4,
#   "colors": {
#     "primary": {
#      "base": 'red',
#     },
#     "secondary": {
#       "base": 'green',
#     },
#     "grayscale": {
#       "base": 'orange',
#     }
#   }
# } 

# EXTRA_SEQUENTIAL_COLOR_SCHEMES =  [
#     {
#         "id": 'warmToHot',
#         "description": '',
#         "isDiverging": True,
#         "label": 'My custom warm to hot',
#         "isDefault": True,
#         "colors":
#          ['#552288', '#5AAA46', '#CC7788', '#EEDD55', '#9977BB', '#BBAA44', '#DDCCDD',
#          '#006699', '#009DD9', '#5AAA46', '#44AAAA', '#DDAA77', '#7799BB', '#88AA77']
#     }]
