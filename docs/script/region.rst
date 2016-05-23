Region
######


.. code-block:: javascript

   var redCoreRegion = match.getMap().getRegion('red-core');

.. js:class:: Region()

   **メソッド**

   .. js:function:: getId()

      IDを取得します。

      :returns: String

   .. js:function:: contains(x, y, z)

      指定座標がこのリージョンに含まれるかチェックします。

      :param Number x: X座標
      :param Number y: Y座標
      :param Number z: Z座標

      :returns: Boolean

   .. js:function:: contains(block)

      指定ブロックがこのリージョンに含まれるかチェックします。

      :param Block block: :doc:`Block </script/block>`

      :returns: Boolean

   .. js:function:: getBlocks()

      :doc:`Block </script/block>` の配列を取得します。

      :returns: Array[ :doc:`Block </script/block>` ]

   **イベント**

   *現在は<apply>にチェックが指定されていない場合はイベントが発行されない制限があります。*

   .. js:data:: enter

      プレイヤーがリージョンに侵入した時

      *イベントオブジェクト*

      .. csv-table::
         :header: メソッド, 戻り値, 説明

         getPlayer(), :doc:`Player </script/player>`, プレイヤー

   .. js:data:: leave

      プレイヤーがリージョンから出た時

      *イベントオブジェクト*

      .. csv-table::
         :header: メソッド, 戻り値, 説明

         getPlayer(), :doc:`Player </script/player>`, プレイヤー

   .. js:data:: blockBreak

      プレイヤーがブロックを破壊した時

      *イベントオブジェクト*

      .. csv-table::
         :header: メソッド, 戻り値, 説明

         getPlayer(), :doc:`Player </script/player>`, プレイヤー
         getBlock(), :doc:`Block </script/block>`, 該当座標のブロック

   .. js:data:: blockPlace

      プレイヤーがブロックを設置した時

      *イベントオブジェクト*

      .. csv-table::
         :header: メソッド, 戻り値, 説明

         getPlayer(), :doc:`Player </script/player>`, プレイヤー
         getBlock(), :doc:`Block </script/block>`, 該当座標のブロック

