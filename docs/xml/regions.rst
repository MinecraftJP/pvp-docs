リージョン
==========

リージョンはフィルターの適用時や各種ゲームモードの設定、スポーンポイントなど、マップ内の領域を指定するために使用されます。

直方体リージョン
^^^^^^^^^^^^^^^^

座標 ``X1,Y1,Z1`` から座標 ``X1,Y1,Z1`` までの直方体

.. code-block:: xml

   <cuboid id="cuboid-region" min="X1,Y1,Z1" max="X2,Y2,Z2"/>


矩形リージョン
^^^^^^^^^^^^^^

座標 ``X1,Z1`` から座標 ``X1,Z1`` までの矩形
Y座標はチェックされません。

.. code-block:: xml

   <rectangle id="rectangle-region" min="X1,Z1" max="X2,Z2"/>


円柱リージョン
^^^^^^^^^^^^^^

座標 ``X,Y,Z`` を基点とした半径 ``RADIUS`` 、高さ ``HEIGHT`` の円柱

.. code-block:: xml

   <cylinder id="cylinder-region" base="X,Y,Z" radius="RADIUS" height="HEIGHT"/>


円形リージョン
^^^^^^^^^^^^^^

座標 ``X,Z`` を基点とした半径 ``RADIUS`` の円形
Y座標はチェックされません。

.. code-block:: xml

   <circle id="circle-region" center="X,Z" radius="RADIUS"/>


ブロックリージョン
^^^^^^^^^^^^^^^^^^

座標 ``X,Y,Z`` の単体ブロック

.. code-block:: xml

   <block id="foo">X,Y,Z</block>


belowリージョン
^^^^^^^^^^^^^^^

指定した座標軸以下の全ての座標にマッチするリージョンを作成します。

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10,80,10

      ``x``, X軸を指定します。, Double
      ``y``, Y軸を指定します。, Double
      ``z``, Z軸を指定します。, Double

.. code-block:: xml

   <below x="60"/>

aboveリージョン
^^^^^^^^^^^^^^^

指定した座標軸以上の全ての座標にマッチするリージョンを作成します。

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10,80,10

   ``x``, X軸を指定します。, Double
   ``y``, Y軸を指定します。, Double
   ``z``, Z軸を指定します。, Double

.. code-block:: xml

   <above x="60"/>

everywhereリージョン
^^^^^^^^^^^^^^^^^^^^

全ての座標にマッチするリージョンです。

.. code-block:: xml

   <everywhere/>

nowhereリージョン
^^^^^^^^^^^^^^^^^

全ての座標にマッチしないリージョンです。

.. code-block:: xml

   <nowhere/>


参照リージョン
^^^^^^^^^^^^^^

他リージョンへの参照

.. code-block:: xml

   <regions>
     <cuboid id="region1" min="-20,60,-20" max="20,70,20"/>
   </regions>

   <region id="region1"/>

リージョンへのフィルターの適用
------------------------------

リージョンへのフィルターの適用には ``<apply>`` ノードを使用します。 applyノードには一つ以上のリージョンを含む事が出来ます。

.. code-block:: xml

   <apply>
     <region id="region1"/>
     ...
   </apply>

applyノードの属性
^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10,75,15

   ``enter``, リージョンへの侵入時にフィルターを適用します。, :doc:`Filter Name </xml/filters>`
   ``leave``, リージョンからの離脱時にフィルターを適用します。, :doc:`Filter Name </xml/filters>`
   ``block``, リージョン内でのブロック破壊及び設置時にフィルターを適用します。, :doc:`Filter Name </xml/filters>`
   ``block-place``, リージョン内でのブロック設置時にフィルターを適用します。, :doc:`Filter Name </xml/filters>`
   ``block-break``, リージョン内でのブロック破壊時にフィルターを適用します。, :doc:`Filter Name </xml/filters>`
   ``use``, リージョン内での右クリック時にフィルターを適用します。, :doc:`Filter Name </xml/filters>`
   ``kit``, リージョンへのプレイヤー侵入時にキットを与えます。, :doc:`Kit Name </xml/kits>`
   ``velocity``, リージョンへのプレイヤー侵入時にVelocityを変更します。, X |comma| Y |comma| Z
   ``filter``, kit使用時のフィルターです。, :doc:`Filter Name </xml/filters>`
   ``message``, フィルターが適用された場合にプレイヤーに表示するメッセージです。, 文字列

リージョン修飾
--------------

リージョンを反転
^^^^^^^^^^^^^^^^

.. code-block:: xml

   <negative>
     <region id="region1"/>
   </negative>

リージョンを結合
^^^^^^^^^^^^^^^^

.. code-block:: xml

   <union>
     <region id="region1"/>
     <region id="region2"/>
     ...
   </union>

リージョンから除去
^^^^^^^^^^^^^^^^^^

最初のリージョンから2番目以降のリージョンを取り除きます。

.. code-block:: xml

   <complement>
     <region id="region1"/>
     <region id="region2"/>
     ...
   </complement>

intersect
^^^^^^^^^

全てのリージョンが重複する範囲のリージョンです。

.. code-block:: xml

   <intersect>
     <region id="region1"/>
     <region id="region2"/>
     ...
   </intersect>

translateリージョン
^^^^^^^^^^^^^^^^^^^

元のリージョンから ``offset`` 属性で指定した分の座標をずらしたリージョンを作成します。

.. code-block:: xml

   <!-- -10,50,0のブロックリージョン -->
   <translate offset="-20,50,0">
       <block>10,0,0</block>
   </translate>

