
Map
#############

.. js:class:: Map()

   **メソッド**


   .. function:: getName()

      マップ名を取得します。

      :returns: String


   .. function:: getVersion()

      バージョンを取得します。

      :returns: String

   .. function:: getFilterFlag(id)

      :doc:`Ifフィルター </xml/filters>` のフラグを取得します。

      :param String id: ID

      :returns: Boolean

   .. function:: setFilterFlag(id, flag)

      :doc:`Ifフィルター </xml/filters>` のフラグを設定します。

      :param String id: ID
      :param Boolean flag: フラグ

      :returns: void

   .. function:: getString(locale, name)

      `<locale>` ノードで定義した多言語メッセージを取得します。

      :param String locale: 言語 (e.g. ja_JP)
      :param String name: `<string>` ノードの `name` 属性

      :returns: String

   .. function:: getString(player, name)

      `<locale>` ノードで定義した多言語メッセージを取得します。

      :param Player player: :doc:`プレイヤー </script/player>`
      :param String name: `<string>` ノードの `name` 属性

      :returns: String

