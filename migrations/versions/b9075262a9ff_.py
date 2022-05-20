"""empty message

Revision ID: b9075262a9ff
Revises: 25c72b630e1f
Create Date: 2022-05-19 21:30:24.578949

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b9075262a9ff'
down_revision = '25c72b630e1f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('profile', sa.Column('user_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'profile', 'user', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'profile', type_='foreignkey')
    op.drop_column('profile', 'user_id')
    # ### end Alembic commands ###