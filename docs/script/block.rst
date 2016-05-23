Block
#####


.. code-block:: javascript

   var redCoreRegion = match.getMap().getRegion('red-core');
   var blocks = redCoreRegion.getBlocks();
   for (var i = 0; i < blocks.length; i++) {
       if (blocks[i].getType() == 'OBSIDIAN') {
           blocks[i].setType('GLASS');
       }
   }

.. js:class:: Block()

   **メソッド**

   .. js:function:: getX()

      X座標を取得します。

      :returns: Integer

   .. js:function:: getY()

      Y座標を取得します。

      :returns: Integer

   .. js:function:: getZ()

      Z座標を取得します。

      :returns: Integer

   .. js:function:: getType()

      タイプを取得します。

      :returns: String (Material)

   .. js:function:: setType(type)

      タイプを設定します。

      :param string type: タイプ (Material)

      :returns: void

   .. js:function:: getData()

      データ値を取得します。

      :returns: Number

   .. js:function:: setData(data)

      データ値を設定します。

      :param Number data: データ値

      :returns: void

   .. js:function:: getSign()

      ブロックが看板の場合に内容を取得します。

      :returns: Array[String] ブロックが看板ではない場合はnull

   .. js:function:: setSign(lines)

      ブロックが看板の場合に内容を設定します。

      :param Array[String] lines: 看板内容の配列
      :returns: void

      *例*

      .. code-block:: javascript

         match.getWorld().setSign(67, 25, 52, ['1行目', '2行目', '3行目', '4行目']);