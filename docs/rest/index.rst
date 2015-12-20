REST API
########

Japan Minecraft PvP APIはRESTful形式でゲームのデータをJSONレスポンスにより取得する事が出来ます。

現在Japan Minecraft PvP APIへのアクセスには `Developer Console <https://minecraft.jp/developer/apps/>`_ よりAPIアクセスの申請を行う必要があります。


エンドポイント
==============

エンドポイントのベースURIは ``https://pvp-api.minecraft.jp/v1/`` になります。

認証
====

全てのAPIへのリクエストにはアクセストークンまたは ``client_id`` パラメータを追加する必要があります。

利用可能な認証

.. csv-table::
   :header: 認証, ユーザのプライベートデータ取得, Client Secretの使用, レート制限の上限増加

   Authorization Code, Yes, Yes, Yes
   Client Credentials, No, Yes, Yes
   Client ID, No, No, No

Client IDによるリクエスト

.. code-block:: http

   GET https://pvp-api.minecraft.jp/v1/servers?client_id={YOUR_CLIENT_ID} HTTP/1.1


アクセストークンによるリクエスト(推奨)

.. code-block:: http

   GET https://pvp-api.minecraft.jp/v1/servers HTTP/1.1
   Authorization: Bearer {YOUR_ACCESS_TOKEN}


または

.. code-block:: http

   GET https://pvp-api.minecraft.jp/v1/servers/?access_token={YOUR_ACCESS_TOKEN} HTTP/1.1


Client Credentials アクセストークンの取得例

.. code-block:: shell

   curl https://minecraft.jp/oauth/token -d 'grant_type=client_credentials&client_id={YOUR_CLIENT_ID}&client_secret={YOUR_CLIENT_SECRET}'

アクセストークンの取得リクエストが成功すると次のようなJSONフォーマットで返却されます。

.. code-block:: json

   {"access_token":"03807cb390319329bdf6c777d4dfae9c0d3b3c35","expires_in":3600,"token_type":"bearer","scope":null}

レート制限 (Rate Limit)
=======================

Client IDによる認証時には、アプリ単位で1時間に50リクエストを送信する事が出来ます。

Client Credentialsによる認証時には、アプリ単位で1時間に100リクエストを送信する事が出来ます。

Authorization Codeによる認証時には、対象のユーザ単位で1時間に100リクエストを送信する事が出来ます。

認証別のレート制限値

.. csv-table::
   :header: 認証, 1時間あたりのリクエスト可能数, レート制限適用対象

   Authorization Code, 100, User
   Client Credentials, 100, App
   Client ID, 50, App


レート制限を超えるとステータスコード ``429 Too Many Requests`` と下記の内容が返されます。

.. code-block:: json

   {
       error: "rate_limit",
       error_description: "Rate limit exceeded"
   }

現在のレート制限の状態はリクエスト時のレスポンスヘッダーに追加されます。

.. code-block:: http

   X-RateLimit-Limit: 100
   X-RateLimit-Remaining: 97
   X-RateLimit-Reset: 1450580967


* X-RateLimit-Limit 1時間あたりのリクエスト可能数
* X-RateLimit-Remaining レート制限までのリクエスト数
* X-RateLimit-Reset レート制限リセット時間(UNIXタイムスタンプ)

ステータスコード
================

このAPIでは下記のレスポンスステータスコードを使用します。

.. csv-table::
   :header: ステータスコード, 説明

   200, OK - リクエストは正常に成功しました。
   204, No Content - リクエストは正常に成功しました。レスポンスはありません。
   400, Bad Request - 不正なフォーマットでリクエストが行われました。
   401, Unauthorized - Client IDまたはアクセストークンがリクエストに含まれていないか有効ではありません。
   403, Forbidden - 認可されたスコープ範囲外へのリクエストです。
   404, Not Found - リクエストされたリソースが見つかりませんでした。
   429, Too Many Requests - レート制限が適用されました。
   500, Internal Server Error - APIサーバで問題が発生しています。
   502, Bad Gateway - 一時的にAPIサーバに接続出来なくなっています。
   503, Server Unavailable - 一時的にAPIサーバに接続出来なくなっています。

API エンドポイント
==================


.. toctree::
   :glob:
   :maxdepth: 1

   matches
   players
   punishments
   servers
