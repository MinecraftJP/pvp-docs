
Team
#############

.. js:class:: Team()

   **メソッド**

   .. js:function:: getId()

      IDを取得します。

      :returns: String

   .. js:function:: getName()

      チーム名を取得します。

      :returns: String

   .. js:function:: getDisplayName()

      色つきのチーム名を取得します。

      :returns: String

   .. js:function:: getAlias()

      別名を取得します。

      :returns: String

   .. js:function:: setName(name)

      別名を設定します。

      :param String name: 別名

      :returns: void

   .. js:function:: getPlayerCount()

      チームのプレイヤー人数を取得します。

      :returns: Number

   .. js:function:: getMax()

      チームの最大人数を取得します。

      :returns: Number

   .. js:function:: getPlayers()

      チームのプレイヤーを取得します。

      :returns: Array[ :doc:`Player </script/player>` ]

   .. js:function:: sendMessage(message)

      チームにメッセージを送信します。

      :param String message: メッセージ

      :returns: void

   .. js:function:: sendLocaleMessage(name)

      チームに `<locale>` で定義した多言語メッセージを送信します。

      :param String name: `<string>` ノードの `name` 属性

      :returns: void

   .. js:function:: incrementScore(value)

      チームのスコアを加算します。

      :param Number value: スコア

      :returns: void

   .. js:function:: decrementScore(value)

      チームのスコアを減算します。

      :param Number value: スコア

      :returns: void

   .. js:function:: getKills()

      チームのキル数を取得します。

      :returns: Number

   .. js:function:: getDeaths()

      チームのデス数を取得します。

      :returns: Number
