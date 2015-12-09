
Map
#############

.. js:class:: Map()

   **メソッド**


   .. js:function:: getName()

      マップ名を取得します。

      :returns: String


   .. js:function:: getVersion()

      バージョンを取得します。

      :returns: String

   .. js:function:: getFilterFlag(id)

      :doc:`Ifフィルター </xml/filters>` のフラグを取得します。

      :param String id: ID

      :returns: Boolean

   .. js:function:: setFilterFlag(id, flag)

      :doc:`Ifフィルター </xml/filters>` のフラグを設定します。

      :param String id: ID
      :param Boolean flag: フラグ

      :returns: void

   .. js:function:: getString(locale, name)

      `<locale>` ノードで定義した多言語メッセージを取得します。

      :param String locale: 言語 (e.g. ja_JP)
      :param String name: `<string>` ノードの `name` 属性

      :returns: String

   .. js:function:: getString(player, name)

      `<locale>` ノードで定義した多言語メッセージを取得します。

      :param Player player: :doc:`プレイヤー </script/player>`
      :param String name: `<string>` ノードの `name` 属性

      :returns: String

