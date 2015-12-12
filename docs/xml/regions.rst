リージョン
==========

リージョンはフィルターの適用時や各種ゲームモードの設定、スポーンポイントなど、マップ内の領域を指定するために使用されます。

直方体リージョン
^^^^^^^^^^^^^^^^

座標 ``X1,Y1,Z1`` から座標 ``X1,Y1,Z1`` までの直方体

.. code-block:: xml

   <cuboid name="cuboid-region" min="X1,Y1,Z1" max="X2,Y2,Z2"/>


矩形リージョン
^^^^^^^^^^^^^^

座標 ``X1,Z1`` から座標 ``X1,Z1`` までの矩形
Y座標はチェックされません。

.. code-block:: xml

   <rectangle name="rectangle-region" min="X1,Z1" max="X2,Z2"/>


円柱リージョン
^^^^^^^^^^^^^^

座標 ``X,Y,Z`` を基点とした半径 ``RADIUS`` 、高さ ``HEIGHT`` の円柱

.. code-block:: xml

   <cylinder name="cylinder-region" base="X,Y,Z" radius="RADIUS" height="HEIGHT"/>


円形リージョン
^^^^^^^^^^^^^^

座標 ``X,Z`` を基点とした半径 ``RADIUS`` の円形
Y座標はチェックされません。

.. code-block:: xml

   <circle name="circle-region" center="X,Z" radius="RADIUS"/>


ブロックリージョン
^^^^^^^^^^^^^^^^^^

座標 ``X,Y,Z`` の単体ブロック

.. code-block:: xml

   <block name="foo">X,Y,Z</block>


参照リージョン

他リージョンへの参照

.. code-block:: xml

   <regions>
     <cuboid name="region1" min="-20,60,-20" max="20,70,20"/>
   </regions>

   <region name="region1"/>

リージョンへのフィルターの適用
------------------------------

リージョンへのフィルターの適用には ``<apply>`` ノードを使用します。 applyノードには一つ以上のリージョンを含む事が出来ます。

.. code-block:: xml

   <apply>
     <region name="region1"/>
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
     <region name="region1"/>
   </negative>

リージョンを結合
^^^^^^^^^^^^^^^^

.. code-block:: xml

   <union>
     <region name="region1"/>
     <region name="region2"/>
     ...
   </union>

リージョンから除去
^^^^^^^^^^^^^^^^^^

最初のリージョンから2番目以降のリージョンを取り除きます。

.. code-block:: xml

   <complement>
     <region name="region1"/>
     <region name="region2"/>
     ...
   </complement>

intersect
^^^^^^^^^

全てのリージョンが重複する範囲のリージョンです。

.. code-block:: xml

   <intersect>
     <region name="region1"/>
     <region name="region2"/>
     ...
   </intersect>

