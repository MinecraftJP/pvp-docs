スポーン
========

チームスポーンや観戦者スポーンを指定します。スポーン設定は必須項目です。

各スポーンには一つ以上のリージョンを含める事が必要です。

.. code-block:: xml

   <spawns>
       <!-- チームスポーン -->
       <spawn team="blue" yaw="-90" kit="blue"><cuboid min="-48,13,-48" max="-44,13,-44"/></spawn>
       <spawn team="red" yaw="90" kit="red"><cuboid min="48,13,44" max="44,13,48"/></spawn>
       <!-- 観戦者スポーン -->
       <default yaw="180"><cuboid min="3,31,104" max="-2,31,99"/></default>
   </spawns>

またリージョンは複数指定する事ができます。リージョンが複数指定されていた場合はランダムで選択されます。

.. code-block:: xml

   <spawns>
       <!-- 例:複数の地点からスポーン -->
       <spawn team="blue" yaw="-90" kit="blue"><cuboid min="-48,13,-48" max="-44,13,-44"/><cuboid min="-48,13,-44" max="-44,13,-48"/></spawn>
       <spawn team="red" yaw="90" kit="red"><cuboid min="48,13,44" max="44,13,48"/><cuboid min="-48,13,-44" max="-44,13,-48"/></spawn>
   </spawns>

<spawns>ノードの属性
^^^^^^^^^^^^^^^^^^^^

.. |lookat_example| replace:: ``lookat="0,60,0"``

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10,80,10

   ``mode``, 利用可能なスポーンポイントが複数存在する場合のスポーン方法を指定します。sequentialまたはrandomを指定可能です。デフォルト: ``random``,
   ``lookat``, スポーン時の視点を特定のブロックに向けます。例 |lookat_example|,

<spawn>ノードの属性
^^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明, 値
   :widths: 10, 80, 10

   ``id``, スポーンをXMLとスクリプトから指定する時の名前です。, 文字列
   ``team``, ``必須`` スポーンのチームを指定します。 ``<team>`` ノードの ``color=""`` 属性に入力した値を指定してください。, :doc:`Team </xml/teams>`
   ``yaw``, スポーン時のヨー(向き)を指定します。ヨーはゲーム内からF3キーで表示されます。, 整数
   ``kit``, スポーン時のキットを指定します。, :doc:`Kit </xml/kits>`
   ``priority``, スポーンの優先順位を指定します。数字が小さいほど優先されます。, 整数
   ``filter``, スポーンに適用するフィルターを指定します。, :doc:`Filter </xml/filters>`


<default>ノードの属性
^^^^^^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明
   :widths: 10, 80, 10

   ``yaw``, スポーン時のヨー(向き)を指定します。ヨーはゲーム内からF3キーで表示されます。, 整数

spawnの領域内に壁、障害物があると強制的にそのブロック上へspawnします。