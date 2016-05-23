Sidebar
#######

サイドバーの描画をスクリプトから行います。このAPIを使用するには<dummy>ゲームモードを使用する必要があります。

.. code-block:: javascript

   var sidebar = match.getSidebar();
   sidebar.setLines(['1行目', '', '3行目']);

.. js:class:: Sidebar()

   **メソッド**

   .. js:function:: setLines(lines)

      サイドバーの内容を設定します。

      :param Array[String] lines: サイドバー内容の配列
      :returns: void

   .. js:function:: setLine(row, line)

      サイドバーの内容を設定します。

      :param Integer row: 行数
      :param Array[String] line: サイドバー内容
      :returns: void

   .. :js:function:: clear()

      サイドバーの内容を消去します。

      :returns: void