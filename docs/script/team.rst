
Team
#############

.. js:class:: Team()

   **メソッド**

   .. function:: getId()

      IDを取得します。

      :returns: String

   .. function:: getName()

      チーム名を取得します。

      :returns: String

   .. function:: getDisplayName()

      色つきのチーム名を取得します。

      :returns: String

   .. function:: getAlias()

      別名を取得します。

      :returns: String

   .. function:: setName(name)

      別名を設定します。

      :param String name: 別名

      :returns: void

   .. function:: getPlayerCount()

      チームのプレイヤー人数を取得します。

      :returns: Number

   .. function:: getMax()

      チームの最大人数を取得します。

      :returns: Number

   .. function:: getPlayers()

      チームのプレイヤーを取得します。

      :returns: Array[ :doc:`Player </script/player>` ]

   .. function:: sendMessage(message)

      チームにメッセージを送信します。

      :param String message: メッセージ

      :returns: void

   .. function:: sendLocaleMessage(name)

      チームに `<locale>` で定義した多言語メッセージを送信します。

      :param String name: `<string>` ノードの `name` 属性

      :returns: void

   .. function:: incrementScore(value)

      チームのスコアを加算します。

      :param Number value: スコア

      :returns: void

   .. function:: decrementScore(value)

      チームのスコアを減算します。

      :param Number value: スコア

      :returns: void

   .. function:: getKills()

      チームのキル数を取得します。

      :returns: Number

   .. function:: getDeaths()

      チームのデス数を取得します。

      :returns: Number
