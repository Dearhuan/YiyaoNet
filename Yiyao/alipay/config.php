<?php
$config = array (	
		//应用ID,您的APPID。
		'app_id' => "2016101300674313",

		//商户私钥
		'merchant_private_key' => "MIIEogIBAAKCAQEAiJowJMMRxZmx+LvbVW3o3DRVVvwmQLsGo3nP0KLyVwvw6GWPJSHpD8p96NxCnuFuuB3UOO6zzcMqhESBBtDWt+q/VsVpvmB9uK+1b8UIzL4SuLXSZe2DxSbAH6kZKfWjwBkQM8B5dm0r0Xy3gV7dekQ2pTXAgO9jJaSdo720DtnVzl0w3gc+qj4OtIGqLVpfYtQesBe+2Th0fEqPFdNn6kBarCPlP0AEBWs3kHiExYUJxpTOr1ezufKxmg8Cdg8wVBcPOB4V9iiNVsJ06b8PQJBPmsx8qXeTDYYYAouLu8ECBWwgm9hRCu54BQQ5uTGtbXv8nDsJT7SdEnHcTSdgpwIDAQABAoIBADZJeIqTj3OFEip0lcUMqfchQS0Rhi5BZXEATutuZnrbfwEMo2exY0roQUOSjVNQ6cx35kg97Oz/+9yW0OQhiMOMoj/cspp7BFuqUKO7nTSo8Q3BDH1/d9eY/89VR2/adBo6m6rFej/rQPe+5bqfNcuKYmEjzH4xJKjoE9Hn6S/hH7a4pu31I22mlgfrPFbI9kGDxCD9dSnA1gd3cm9XaE1DAZDGTNkIQAfTivFGGzkln/bqsriTQGtkZMRJOlvE5Yr6uV3inHVvLWLub9J+9u9ZRJaT7thAibB7cdL1rr46SWNKxS4sZZyxIGwnpip21iH26PRRfSnaqGUEzg1biHkCgYEA61sne5suSqXhnXSPz8Rxfe2neg9VvRyIlWQ17SLwVIMLfhUfr79mgMSeX30Js7teCjMQq0RXfqcXeUXZw9s32ZB2pyZD+SGp+l6803J/QoRikY3MMRwn0lSnaDgv1gCtMeEYjLJ8vtqcALZkMUZJYs2/F3E/EalUXp6Nl3BBv6MCgYEAlJWMmeGHSfSOQnVGaSX9bFa7urnsrHAMl4ZtfTCbEi2Bo4itUrVWwUi6BgTlJQv969gEzi1Ntcyyn8YjOzG0xs7KNNqaRNqXkkUYEpcO9Fpvig5fQpiIXAM3V7AZgPL8OhWj4xX58Lb5X6LDCo+eSDK48dXejcljnOdzcIg7my0CgYBlin9fWdVACY9scmS1fAiHDyiphcI1BAF9iq2lcOSFYcBslkqEdayQs8OsaPLto1HwTpXLfoHNN+Ptw5Avav4OlMBMXzsGWlrOlV8cTxLOrPUl3SqSqZYYrcNIOK2Sw9n1YitIUJ13bjPOLuLNS4jP4vql74sJYKfw5rEp/BmxxwKBgEnAWYPgMBkDbMGMGKEEnF/0RUaQFuwYygdEUIB9aduB/wE/TFjrbd6OzNdEAsF6zFUOaoQ0dIgyzM8FuGMfbw3ngvLtNvnKTsXpyeMgW+nqIcczDxGtSLHzXrsFzAL3mT7zkt+a/u7+w5U24v0RAI3xr19KuydBuVIeiGxpEr0ZAoGAOre36oZxUI5kpmodLbQY0qT5rhKUfbL1Tl6nmk8TKAuqxB1Ii1f+7iVE5Dc5uSnqNGElttVXQZnJi0sGi6ss4URsq5qxvyxqNQxcarGSids1lHlQXFGHhqEM5gKYfcdMlU0l6tXI7zQN3aJibQG/c8Zmjak6rpg5p8ssIa9wN7o=",
		
		//异步通知地址
		'notify_url' => "https://127.0.0.1/project/YiyaoNet/Yiyao/alipay/notify_url.php",
		
		//同步跳转
		'return_url' => "https://127.0.0.1/project/YiyaoNet/Yiyao/alipay/return_url.php",

		//编码格式
		'charset' => "UTF-8",

		//签名方式
		'sign_type'=>"RSA2",

		//支付宝网关
		'gatewayUrl' => "https://openapi.alipaydev.com/gateway.do",

		//支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
		'alipay_public_key' => "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiLvABpufB7SCfgABvLv8fZLSNivGbJHZyh10040IxAStKI3ipFFhekYp9oAHvV+vEhP9hmuXIeEdtFQtFc9LQZz9jQiVBoM608eL4ZY71YzBzH+xNGBLPwZjbiWBDDkV9c49AuyArqW3gHePIjnJsJJNLos4K+dYe/uQFuhqTtd1AVP0TtnErjPsGEQcjfeTfja7w3i4WShsqZejaSndNFiXTBpg5q5bEMyk5pi6I/ROEYReWXTNJolqmcYY8T9LYdYhIESOs2tudsrZMMZanT46dsnSsRFBemxqJ439n19sB9jmM2ia91kNfH/ITP5HtohI/y06h9BLJkVPiPX7wQIDAQAB",
);