フィルター
==========

フィルターはプレイヤーの移動やブロックを制限するために使用します。

.. code-block:: xml

   <filters>
     <filter id="filter-name">
       <!-- 条件、修飾フィルターなど -->
     </filter>
   </filters>

デフォルトフィルター
--------------------

特定のイベントに対するフィルターを指定する事が出来ます。

.. csv-table::
   :header: フィルター名, 説明

   ``allow-all`` ``deny-all``, 全てをフィルター
   ``allow-players`` ``deny-players``, プレイヤーのアクセスをフィルター
   ``allow-blocks`` ``deny-blocks``, ブロックの設置・破壊をフィルター
   ``allow-place`` ``deny-place``, ブロックの配置をフィルター
   ``allow-break`` ``deny-break``, ブロックの破壊をフィルター
   ``allow-world`` ``deny-world``, ワールドによるブロック変更をフィルター
   ``allow-spawns`` ``deny-spawns``, スポーン理由でフィルター
   ``allow-entities`` ``deny-entities``, Entityでフィルター
   ``allow-mobs`` ``deny-mobs``, Mobでフィルター

条件フィルター
--------------

条件フィルターで実際にアクセスを許可、拒否する際の条件を定義する事が出来ます。

.. |random_filter| replace:: ``<random>[0.5, 0.7)</random>``

.. csv-table::
   :header: フィルター, 説明

   ``<filter id="otherfilter"/>``, 他のフィルターへの参照を名前で指定します。
   ``<team>team name</team>``, チームで一致します。
   ``<block>block name</block>``, ブロックタイプで一致します。指定可能なブロック名は :doc:`Material </data/material>` をご覧ください。ダメージ値を指定する事も出来ます。例:<block>sand:2</block>
   ``<spawn>spawn reason</spawn>``, スポーン理由で一致します。指定可能な値は :doc:`SpawnReason </data/spawnreason>` をご覧ください。
   ``<entity>entity type</entity>``, Entityのタイプで一致します。指定可能な値は :doc:`EntityType </data/entity_type>` をご覧ください。
   ``<mob>creature type</mob>``, Mobのタイプで一致します。指定可能な値は :doc:`EntityType </data/entity_type>` のうちモンスターのみです。
   ``<kill-streak count="5"/>``, 連続キル数が特定の数または範囲で一致します。
   ``<class>class name</class>``, 特定のクラスを選択している時に一致します。
   ``<crouching/>``, しゃがんでいる時に一致します。
   ``<carrying><item>item name</item></carrying>``, 特定のアイテムがインベントリに存在する時に一致します。
   ``<wearing><item>item name</item></wearing>``, 特定のアイテムを装備している時に一致します。
   ``<holding><item>item name</item></holding>``, 特定のアイテムを手に持っているときに一致します。
   |random_filter|, ランダムに設定される値が指定範囲内の場合に一致します。
   ``<elapsed min="10m" max="15m"/>``, ゲーム経過時間が指定範囲内の場合に一致します。
   ``<health min="1" max="5"/>``, 体力が指定範囲内の場合に一致します。
   ``<level min="55" max="70"/>``, レベルが指定範囲内の場合に一致します。
   ``<cause>cause</cause>``, ブロック変更の原因が特定の理由の場合に一致します。現時点で指定可能な値は ``PLAYER`` 及び ``EXPLOSION`` です。
   ``<void/>``, ``Y=0`` のブロックが ``AIR`` の場合に一致します。
   ``<if id="flagid"/>``, スクリプトから :doc:`Map.setFilterFlag() </script/map>` により設定されたフラグがtrueの場合に一致します。
   ``<objective id="objective id"/>``, 特定のオブジェクティブが達成されている場合に一致します。

連続キルフィルター
^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10,80,10

   ``count``, 連続キルがこの値になっている時に一致します。 ``min`` 及び ``max`` と組み合わせて使う事は出来ません。, 整数
   ``repeat``, trueの場合は連続キルが ``count`` の倍数毎に一致するようになります。, Boolean
   ``min``, 連続キルがこの値以上になっている時に一致します。, 整数
   ``max``, 連続キルがこの値以下になっている時に一致します。, 整数

ランダムフィルター
^^^^^^^^^^^^^^^^^^^

ランダムフィルターはイベント毎に生成されるランダムな0～1.0までの値が指定された条件を満たす時に一致します。 区間数での指定も可能です。

.. code-block:: xml

   <!-- 50%の確率で一致 -->
   <random>0.5</random>

   <!-- 50%の確率で一致。この場合0.25を含み、0.75を含みません。 -->
   <random>[0.25, 0.75)</random>

経過時間フィルター
^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10,80,10

   ``min``, ゲーム経過時間がこの値以上になっている時に一致します。, :doc:`TimePeriod </data/timeperiod>`
   ``max``, ゲーム経過時間がこの値以下になっている時に一致します。, :doc:`TimePeriod </data/timeperiod>`

Voidフィルター
^^^^^^^^^^^^^^

Voidフィルターは ``Y=0`` のブロックをチェックし、 ``AIR`` の場合に一致します。編集可能な領域の ``Y=0`` を ``AIR`` 以外のブロックで埋めておくことで複雑な地形を簡単に保護する事が可能です。 プレイヤーに橋を作らせるエリアを作る場合は、 ``Y=0`` にダメージ値が ``1`` の ``AIR`` を配置しておくことでVoidフィルターを通過させる事が出来ます。

.. code-block:: xml

   <filters>
     <filter id="no-void">
       <not><void/></not>
     </filter>
   </filters>

   <regions>
     <apply block="no-void" message="You may not modify void.">
       <everywhere/>
     </apply>
   </regions>

修飾フィルター
^^^^^^^^^^^^^^

.. csv-table::
   :header: フィルター, 説明
   :widths: 20,80

   ``<all></all>``, AND条件です。全ての子要素のフィルターが一致した時に一致します。
   ``<not></not>``, NOT条件です。全ての子要素のフィルターが一致しない場合に一致します。
   ``<any></any>``, OR条件です。子要素が一つでも一致した場合に一致します。
   ``<one></one>``, 子要素が一つだけ一致した場合に一致します。

サンプル
--------

.. code-block:: xml

   <map>
       <filters>
           <!-- 手にPortal Keyアイテムを持っている or 試合開始後15分経過で一致 -->
           <filter id="need-portal-key">
               <any>
                   <holding><item name="`6Portal Key">blaze rod</item></holding>
                   <elapsed min="15m"/>
               </any>
           </filter>
       </filters>

       <portals>
           <portal x="@-26" y="@70" z="@14" filter="need-portal-key">
               <cuboid min="26,70,-18" max="27,72,-18"/>
           </portal>

           <portal x="@26" y="@70" z="@-15" filter="need-portal-key">
               <cuboid min="-27,70,18" max="-26,72,18"/>
           </portal>
       </portals>

       <killreward>
           <!-- Portal Keyを所持していない状態でゲーム開始後1~1分20秒間の間は60%の確率または連続キル5回以上で50%の確率で一致 -->
           <filter>
               <all>
                   <not>
                       <carrying><item name="`6Portal Key">blaze rod</item></carrying>
                   </not>
                   <any>
                      <all>
                          <elapsed min="1m" max="80s"/>
                          <random>0.6</random>
                      </all>
                      <all>
                          <kill-streak min="5"/>
                          <random>[0.5, 1)</random>
                       </all>
                   </any>
               </all>
           </filter>
           <item name="`6Portal Key">blaze rod</item>
       </killreward>
   </map>

旧バージョン互換フィルター
--------------------------

旧バージョンでは ``<allow>`` 、 ``<deny>`` ノードと ``parents=""`` 属性によりフィルターを行っていました。

例

.. code-block:: xml

   <filters>
       <filter id="only-blue" parents="deny-players deny-world deny-blocks">
           <allow>
               <team>blue</team>
           </allow>
       </filter>
       <filter id="only-red" parents="deny-players deny-world deny-blocks">
           <allow>
               <team>red</team>
           </allow>
       </filter>
       <filter id="no-tnt" parents="deny-blocks">
           <deny>
               <block>tnt</block>
           </deny>
       </filter>
       <filter id="no-dispenser" parents="deny-blocks">
           <deny>
               <block>dispenser</block>
           </deny>
       </filter>
   </filters>

