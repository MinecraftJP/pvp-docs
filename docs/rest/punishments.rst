Punishments
###########

GET punishments
---------------

処罰一覧を取得します。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/punishments HTTP/1.1

パラメータ
~~~~~~~~~~

.. csv-table::
   :header: パラメータ, 説明

   max_id, 指定されたIDより小さいIDのものを返却します。レスポンスとして取得した最後のIDを指定して再度リクエストする事でページングが可能です。 ``Optional``
   limit, 取得するアイテム数を指定します。デフォルト20件、最大100件です。 ``Optional``

レスポンス
~~~~~~~~~~

.. code-block:: json

   [{
       id: "5675f75740620cbaec00834d",
       punisher: null,
       punished: {
           uuid: "249dac7559534d50820a39fa4e8eaa4e",
           name: "ATplayz"
       },
       state: 0,
       reason: "Compromised Account",
       level: 4,
       time: "2015-12-20T09:33:27.008+09:00",
       type: "ban",
       server: "HipChat",
       automatic: true,
       permalink_url: "https://pvp.minecraft.jp/punishments/5675f75740620cbaec00834d"
   }, {
       id: "5674fda140620c294800834d",
       punisher: null,
       punished: {
           uuid: "6dbed95aeb1a4512bbcc0d52fccc8175",
           name: "Bolange"
       },
       state: 0,
       reason: "Compromised Account",
       level: 4,
       time: "2015-12-19T15:48:01.29+09:00",
       type: "ban",
       server: "HipChat",
       automatic: true,
       permalink_url: "https://pvp.minecraft.jp/punishments/5674fda140620c294800834d"
   }, {
       id: "1234567890abcdef01234567",
       punisher: null,
       punished: {
           uuid: "1234567890abcdef1234567890abcdef",
           name: "Example"
       },
       state: 0,
       reason: "Report Spam",
       level: 1,
       time: "2015-12-19T14:42:02.433+09:00",
       type: "punishment",
       server: "Sabatora",
       automatic: false,
       permalink_url: "https://pvp.minecraft.jp/punishments/1234567890abcdef01234567"
   }]

GET punishments/:id
-------------------

処罰を取得します。

リクエスト
~~~~~~~~~~

.. code-block:: http

   GET /v1/punishments/:id HTTP/1.1

パラメータ
~~~~~~~~~~

なし

レスポンス
~~~~~~~~~~

.. code-block:: json

   {
       "id: "1234567890abcdef01234567",
       "punisher": null,
       "punished": {
           "uuid": "1234567890abcdef1234567890abcdef",
           "name": "Example"
       },
       "state": 0,
       "reason": "Report Spam",
       "level": 1,
       "time": "2015-12-19T14:42:02.433+09:00",
       "type": "punishment",
       "server": "Slack",
       "automatic": false,
       "permalink_url": "https://pvp.minecraft.jp/punishments/1234567890abcdef01234567"
   }

